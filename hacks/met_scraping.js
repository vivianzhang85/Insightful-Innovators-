// MET Museum Scraper Module - Frontend Version
class MetScraper {
    constructor() {
        this.baseUrl = 'https://collectionapi.metmuseum.org/public/collection/v1';
        this.cache = new Map();
    }

    async searchCostumes(query = 'costume') {
        try {
            const url = `${this.baseUrl}/search?q=${encodeURIComponent(query)}&hasImages=true&departmentId=14&isHighlight=true`;
            const response = await fetch(url);
            
            if (!response.ok) throw new Error(`HTTP ${response.status}`);
            
            const data = await response.json();
            
            if (data && data.objectIDs) {
                console.log(`Found ${data.objectIDs.length} ${query} items`);
                return data.objectIDs.slice(0, 20); // Limit to 20 items
            }
            
            return [];
            
        } catch (error) {
            console.error('Search error:', error);
            return [];
        }
    }

    async getObjectDetails(objectId) {
        // Check cache first
        if (this.cache.has(objectId)) {
            return this.cache.get(objectId);
        }

        try {
            const url = `${this.baseUrl}/objects/${objectId}`;
            const response = await fetch(url);
            
            if (!response.ok) throw new Error(`HTTP ${response.status}`);
            
            const data = await response.json();
            
            const outfitData = {
                object_id: objectId,
                title: data.title || 'Unknown Title',
                artist: data.artistDisplayName || 'Unknown Artist',
                date: data.objectDate || 'Unknown Date',
                culture: data.culture || '',
                department: data.department || '',
                image_url: data.primaryImage || '',
                met_url: data.objectURL || '',
                description: (data.objectName || '') + '. ' + (data.creditLine || ''),
                period: data.period || '',
                scraped_at: new Date().toISOString()
            };

            // Cache the result
            this.cache.set(objectId, outfitData);
            
            return outfitData;
            
        } catch (error) {
            console.error(`Error fetching object ${objectId}:`, error);
            return null;
        }
    }

    async scrapeFashionItems(limit = 10) {
        console.log('Starting MET Museum fashion scraper...');
        
        const searchTerms = ['costume', 'dress', 'gown', 'fashion'];
        let allObjectIds = [];
        
        // Search for each term
        for (const term of searchTerms) {
            console.log(`Searching for: ${term}`);
            const objectIds = await this.searchCostumes(term);
            allObjectIds = [...allObjectIds, ...objectIds.slice(0, 5)]; // Get first 5 from each
        }
        
        // Remove duplicates
        allObjectIds = [...new Set(allObjectIds)].slice(0, limit);
        console.log(`Total unique items to scrape: ${allObjectIds.length}`);
        
        // Get details for each item
        const outfits = [];
        for (const objectId of allObjectIds) {
            console.log(`Scraping object ID: ${objectId}`);
            const outfitData = await this.getObjectDetails(objectId);
            
            if (outfitData && outfitData.image_url) {
                outfits.push(outfitData);
            }
            
            // Add delay to be respectful to the API
            await new Promise(resolve => setTimeout(resolve, 100));
        }
        
        console.log(`Scraping complete! Found ${outfits.length} items.`);
        return outfits;
    }

    async searchOutfits(query = 'costume', limit = 5) {
        try {
            const objectIds = await this.searchCostumes(query);
            const outfits = [];
            
            // Get details for first few items
            for (const objectId of objectIds.slice(0, limit)) {
                const outfitData = await this.getObjectDetails(objectId);
                if (outfitData && outfitData.image_url) {
                    outfits.push(outfitData);
                }
            }
            
            return outfits;
            
        } catch (error) {
            console.error('Search error:', error);
            return [];
        }
    }
}

// Export the class
export default MetScraper;