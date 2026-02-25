import { pythonURI, fetchOptions } from './config.js';

const MICROBLOG_API = `${pythonURI}/api/microblog/posts`;

export async function fetchPosts(topicPath) {
    try {
        let url = MICROBLOG_API;
        if (topicPath) {
            url += `?page_context=${encodeURIComponent(topicPath)}`;
        }
        
        console.log('📡 Fetching microblog posts from:', url);
        
        const response = await fetch(url, {
            ...fetchOptions,
            credentials: 'include'
        });
        
        console.log('📦 Microblog response status:', response.status);
        
        if (!response.ok) {
            throw new Error(`HTTP ${response.status}`);
        }
        
        const data = await response.json();
        console.log('📦 Microblog data:', data);
        
        // Convert backend format to frontend format
        const microblogs = (data.posts || []).map(post => ({
            id: post.id,
            userName: post.username || 'Anonymous',
            timestamp: post.created_at,
            characterCount: post.content ? post.content.length : 0,
            topicPath: post.page_context || '',
            content: post.content,
            likes: post.likes || 0
        }));
        
        console.log('✅ Converted microblogs:', microblogs);
        
        return { microblogs };
    } catch (error) {
        console.error('❌ Error fetching microblog posts:', error);
        return { microblogs: [] };
    }
}

export async function createPost({ content, topicPath }) {
    try {
        console.log('📝 Creating post:', { content, topicPath });
        
        const response = await fetch(MICROBLOG_API, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include',
            body: JSON.stringify({
                content: content,
                page_context: topicPath
            })
        });
        
        if (!response.ok) {
            throw new Error(`HTTP ${response.status}`);
        }
        
        const data = await response.json();
        console.log('✅ Post created:', data);
        
        return data;
    } catch (error) {
        console.error('❌ Error creating post:', error);
        throw error;
    }
}

export async function updatePost({ id, content, topicPath }) {
    try {
        console.log('✏️ Updating post:', { id, content, topicPath });
        
        const response = await fetch(`${MICROBLOG_API}/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include',
            body: JSON.stringify({
                content: content,
                page_context: topicPath
            })
        });
        
        if (!response.ok) {
            throw new Error(`HTTP ${response.status}`);
        }
        
        const data = await response.json();
        console.log('✅ Post updated:', data);
        
        return data;
    } catch (error) {
        console.error('❌ Error updating post:', error);
        throw error;
    }
}

export async function createReply({ postId, content, topicPath }) {
    // For now, replies are just regular posts with a prefix
    return createPost({ 
        content: `Reply to #${postId}: ${content}`, 
        topicPath 
    });
}

export async function fetchReplies(postId) {
    // For now, return empty array
    // You can extend the backend later to support proper threading
    return { replies: [] };
}