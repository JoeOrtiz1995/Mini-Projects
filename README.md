# Mini Projects Showcase

A deployed website for showcasing mini coding projects and exercises. This site provides an organized way to display and access various programming projects with live demos and source code.

## 🌐 Live Site

The site is automatically deployed to GitHub Pages at: `https://joeortiz1995.github.io/Mini-Projects/`

## 📁 Project Structure

```
Mini-Projects/
├── index.html          # Main showcase page
├── styles.css          # Main site styling
├── script.js           # Dynamic project loading
├── projects/           # Directory for all projects
│   ├── projects.json   # Project metadata and configuration
│   └── calculator/     # Example project
│       ├── index.html  # Project demo
│       └── README.md   # Project documentation
└── .github/workflows/  # GitHub Pages deployment
    └── pages.yml
```

## ✨ Features

- **Responsive Design**: Works on desktop, tablet, and mobile devices
- **Dynamic Project Loading**: Automatically discovers and displays projects
- **Live Demos**: Click-through demos for each project
- **Source Code Access**: Direct links to project source code
- **Technology Tags**: Visual indicators of technologies used
- **Auto-Deployment**: Automatic deployment to GitHub Pages

## 🚀 Adding New Projects

### Method 1: Using projects.json (Recommended)

1. Create a new folder in the `projects/` directory
2. Add your project files (HTML, CSS, JS, etc.)
3. Update `projects/projects.json` with your project details:

```json
{
  "name": "Project Name",
  "description": "Brief description of what the project does",
  "folder": "project-folder-name",
  "technologies": ["HTML", "CSS", "JavaScript"],
  "demoUrl": "./projects/project-folder-name/index.html",
  "codeUrl": "./projects/project-folder-name/",
  "category": "Web Development",
  "completed": "2024-01-15"
}
```

### Method 2: Directory Structure

Projects are automatically discovered from the `projects/` directory. Each project should:

- Have its own subdirectory in `projects/`
- Include an `index.html` file for the demo
- Include a `README.md` file with project documentation

## 📝 Project Template

When creating a new project, include:

```
projects/your-project/
├── index.html      # Main project file
├── style.css       # Project-specific styles (if needed)
├── script.js       # Project-specific JavaScript (if needed)
└── README.md       # Project documentation
```

### README Template for Projects

```markdown
# Project Name

Brief description of the project.

## Features
- Feature 1
- Feature 2

## Technologies Used
- Technology 1
- Technology 2

## How to Use
Instructions for using the project.

## Files
- `index.html`: Description
- `style.css`: Description
```

## 🛠️ Local Development

1. Clone the repository:
```bash
git clone https://github.com/JoeOrtiz1995/Mini-Projects.git
cd Mini-Projects
```

2. Start a local web server:
```bash
python3 -m http.server 8000
# or
npx serve .
```

3. Open `http://localhost:8000` in your browser

## 🚀 Deployment

The site automatically deploys to GitHub Pages when changes are pushed to the main branch. The deployment workflow:

1. Triggers on push to main branch
2. Sets up GitHub Pages environment
3. Uploads all files as an artifact
4. Deploys to GitHub Pages

## 🎨 Customization

### Styling
- Modify `styles.css` to change the overall look and feel
- Update CSS variables for color schemes
- Customize responsive breakpoints

### Functionality
- Edit `script.js` to modify project discovery logic
- Customize project card layouts
- Add new project metadata fields

### Projects Configuration
- Update `projects/projects.json` to modify project listings
- Add new fields like difficulty, date, or categories
- Implement filtering and sorting features

## 🤝 Contributing

1. Fork the repository
2. Create a new branch for your feature
3. Add your project to the `projects/` directory
4. Update `projects.json` with your project details
5. Test locally
6. Submit a pull request

## 📋 Requirements

- Modern web browser with JavaScript support
- No build tools or dependencies required
- Static hosting compatible (GitHub Pages, Netlify, etc.)

## 🔧 Technologies

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Styling**: CSS Grid, Flexbox, CSS Variables
- **Deployment**: GitHub Pages, GitHub Actions
- **Project Discovery**: JSON-based configuration

## 📄 License

This project is open source. Feel free to use it as a template for your own project showcase!