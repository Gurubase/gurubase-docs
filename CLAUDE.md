# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository Overview

This is the official documentation repository for Gurubase, an AI-powered platform that transforms content into intelligent AI assistants called "Gurus". The documentation is built using Mintlify and auto-deploys when changes are pushed to the master branch.

## Commands

### Development
```bash
# Install Mintlify CLI (one-time setup)
npm i -g mintlify

# Run documentation locally
mintlify dev
```

## Architecture & Structure

### Documentation Framework
- **Mintlify**: Modern documentation platform with MDX support (Markdown + JSX)
- **Configuration**: `mint.json` contains all site configuration, navigation, and settings
- **No build process**: Mintlify handles compilation and deployment automatically

### Content Organization
```
/api-reference/          # API documentation
  /endpoints/           # Individual endpoint docs (11 endpoints)
  authentication.mdx    # API key setup guide
/guides/                # Feature guides
  data-sources/        # How to add various data sources
  integrations/        # Platform integration guides
/integrations/         # Detailed integration setup docs
/images/               # Screenshots and diagrams
/snippets/             # Reusable MDX content snippets
```

### Key Files
- `mint.json`: Main configuration - controls navigation, colors, API settings, and deployment
- `gurubase.js`: Widget integration script for embedding Gurubase chat on websites
- `introduction.mdx`: Landing page content
- `quickstart.mdx`: Getting started guide

### API Documentation Structure
Base URL: `https://api.gurubase.io/api/v1/`
- Authentication via `x-api-key` header
- RESTful endpoints for:
  - Question answering (`/ask`)
  - Data source management (`/datasources/*`)
  - Crawler control (`/crawler/*`)
  - YouTube imports (`/youtube/*`)
  - Analytics export (`/export-analytics`)

### Mintlify-Specific Patterns
- Use MDX format for all documentation files
- Navigation structure defined in `mint.json` under the `navigation` key
- Snippets can be included with `$snippets/snippet-name`
- API endpoint docs follow the structure in `/api-reference/endpoints/`
- Use Mintlify components like `<Card>`, `<CardGroup>`, `<CodeGroup>` for rich content

### Content Guidelines
- Documentation focuses on three main areas:
  1. Getting started and data source setup
  2. Integration with various platforms (Slack, Discord, Zendesk, etc.)
  3. API reference for developers
- Include practical examples and code snippets
- Use images from `/images/` directory for visual guides
- Maintain consistent structure across similar pages (e.g., all integration guides follow the same format)

### Testing Documentation Changes
Always preview changes locally with `mintlify dev` before pushing to master, as changes auto-deploy to production.