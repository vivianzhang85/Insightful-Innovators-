#!/bin/bash
set -ex

BASHRC="$HOME/.zshrc"

log() {
    echo "=== ✅ $1 ==="
}

add_to_bashrc() {
    local line="$1"
    grep -qxF "$line" "$BASHRC" || echo "$line" >> "$BASHRC"
}

# 0. Aliases and Virtualenv Prompt
add_to_bashrc 'alias code="code --no-sandbox"'

# 1. Brew Packages (Python & Ruby)
# Prefer using rbenv-managed Ruby if available; otherwise install Homebrew Ruby
brew update
brew install python

# If rbenv is present, prefer it; otherwise add Homebrew Ruby to PATH
if command -v rbenv >/dev/null 2>&1; then
    echo "rbenv detected — will use rbenv-managed Ruby if configured"
    add_to_bashrc 'export PATH="$HOME/.rbenv/bin:$PATH"'
    add_to_bashrc 'eval "$(rbenv init - zsh)"'
else
    brew install ruby || true
    RUBY_PATH=$(brew --prefix ruby)/bin
    add_to_bashrc "export PATH=\"$RUBY_PATH:\$PATH\""
fi

# Set GEM_HOME to user-accessible location only when not using rbenv
if ! command -v rbenv >/dev/null 2>&1; then
    GEM_HOME="$HOME/.local/gems"
    mkdir -p "$GEM_HOME"
    add_to_bashrc "export GEM_HOME=\"$GEM_HOME\""
    add_to_bashrc "export PATH=\"$GEM_HOME/bin:\$PATH\""
fi

# Install gems (will install into active Ruby's gemset — rbenv or system)
echo "Installing Bundler and Jekyll for the active Ruby environment"
gem install bundler jekyll || true

# 3. Python3 is Python
mkdir -p "$HOME/.local/bin"
ln -sf "$(which python3)" "$HOME/.local/bin/python"
ln -sf "$(which pip3)" "$HOME/.local/bin/pip"
add_to_bashrc 'export PATH="$HOME/.local/bin:$PATH"'

# 4. Python3 is Python
source $BASHRC
python --version
pip --version
ruby -v
bundle -v
gem --version

# Restart the terminal
echo "All tools are set up successfully!"
echo "Please start a new terminal or run 'source $BASHRC' to apply the changes."