# Copilot Instructions for Far-Fetched Website

## Project Overview
This is a Jekyll-based GitHub Pages site for Far-Fetched Advisory and Consulting. The site uses an unconventional structure where source files are located in `/docs` rather than the repository root, due to GitHub Pages publishing from the `/docs` folder.

## Critical Architecture Patterns

### Source Structure (Non-Standard)
- **Source files**: All Jekyll source content is in `/docs/` directory
- **Config files**: `docs/_config.yml` (production) and `docs/_config_local.yml` (local dev)
- **Custom domain**: Configured via `docs/CNAME` with `www.farfetched.ltd`
- **Build output**: Goes to `docs/_site/` (ignored in git via `.gitignore`)

### GitHub Pages Integration
- GitHub Pages builds from `/docs` folder (not repo root)
- Uses `github-pages` gem for compatibility with GitHub's Jekyll environment
- Production builds automatically on push to main branch
- Custom domain DNS managed separately

## Essential Development Workflows

### Local Development Commands
```bash
# Standard local serve (from repo root)
bundle exec jekyll serve --source docs

# OR with local config overrides
bundle exec jekyll serve --source docs --config docs/_config.yml,docs/_config_local.yml

# Build for production
bundle exec jekyll build --source docs
```

### VS Code Tasks (Use Ctrl+Shift+P > Tasks: Run Task)
- **"Start Jekyll Server"**: Standard development server
- **"Build Jekyll Site"**: Production build with gem updates
- **"Clean Jekyll Site"**: Clear build artifacts

### Configuration Management
- **Production**: `docs/_config.yml` with `url: "https://www.farfetched.ltd"`
- **Local dev**: `docs/_config_local.yml` with `url: "https://localhost"`
- **Multi-config**: Use `--config docs/_config.yml,docs/_config_local.yml` pattern

## Project-Specific Conventions

### File Organization
- Jekyll source files go in `/docs/` not repo root
- Configuration uses `source: docs` and `destination: docs/_site`
- Custom theme: Wave-inspired styling in `docs/_sass/minima/wave-theme.scss`
- Posts: Create in `docs/_posts/` following Jekyll naming convention (YYYY-MM-DD-title.md)

### Build Dependencies
- Uses `github-pages` gem (~232) for GitHub compatibility
- Bundler required for all Jekyll commands (`bundle exec jekyll ...`)
- Ruby gems managed via Gemfile in repo root

### Git Workflow
- Only commit source files, never built artifacts
- `docs/_site/` is gitignored (contains build output)
- GitHub Pages builds automatically handle deployment
- **All changes must be made in a branch** with a descriptive title and a date stamp (e.g., `feature-contact-form-2025-07-31`).

## Common Gotchas
1. **Don't run Jekyll from `/docs` directory** - always specify `--source docs` from repo root
2. **Config changes require server restart** - Jekyll doesn't auto-reload config files
3. **GitHub Pages uses older Jekyll** - stick to github-pages gem versions for compatibility
4. **Source/destination paths are relative** - `source: docs` means "docs folder relative to where you run the command"

## Theme and Styling
- Uses `minima` theme as base with extensive custom wave-inspired styling
- **Custom theme**: Wave-inspired professional theme in `docs/_sass/minima/wave-theme.scss`
- **Color palette**: Ocean blues, ice whites, with accent purples and warm oranges
- **Key features**: subtle backgrounds resembling simple isobar patterns
- **Main stylesheet**: `docs/assets/main.scss` imports minima + custom wave overrides
- Theme customization files: `docs/_sass/minima/` for theme overrides

## Content Structure
- **Homepage**: `docs/index.md` with front matter layout and hero section
- **Posts**: Planned `docs/_posts/` directory for blog content (Jekyll convention: YYYY-MM-DD-title.md)
- **Front matter**: Use Jekyll's standard front matter for posts (layout, title, date, categories, tags)
