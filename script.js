// Project discovery and rendering functionality
class ProjectShowcase {
    constructor() {
        this.projectsContainer = document.getElementById('projects-grid');
        this.init();
    }

    async init() {
        this.showLoading();
        try {
            const projects = await this.discoverProjects();
            this.renderProjects(projects);
        } catch (error) {
            console.error('Error loading projects:', error);
            this.showError();
        }
    }

    showLoading() {
        this.projectsContainer.innerHTML = '<div class="loading">Loading projects...</div>';
    }

    showError() {
        this.projectsContainer.innerHTML = '<div class="no-projects"><h3>Error loading projects</h3><p>Please try again later.</p></div>';
    }

    async discoverProjects() {
        try {
            const response = await fetch('./projects/projects.json');
            if (response.ok) {
                return await response.json();
            }
        } catch (error) {
            console.log('Projects.json not found, using fallback');
        }
        
        // Fallback to static list if JSON file is not available
        return [
            {
                name: "Calculator",
                description: "A simple calculator built with HTML, CSS, and JavaScript featuring basic arithmetic operations.",
                folder: "calculator",
                technologies: ["HTML", "CSS", "JavaScript"],
                demoUrl: "./projects/calculator/index.html",
                codeUrl: "./projects/calculator/"
            }
        ];
    }

    renderProjects(projects) {
        if (projects.length === 0) {
            this.projectsContainer.innerHTML = `
                <div class="no-projects">
                    <h3>No projects yet</h3>
                    <p>Projects will appear here as they are added to the repository.</p>
                </div>`;
            return;
        }

        const projectsHTML = projects.map(project => this.createProjectCard(project)).join('');
        this.projectsContainer.innerHTML = projectsHTML;
    }

    createProjectCard(project) {
        const techTags = project.technologies
            .map(tech => `<span class="tech-tag">${tech}</span>`)
            .join('');

        return `
            <div class="project-card">
                <h3>${project.name}</h3>
                <p>${project.description}</p>
                <div class="project-links">
                    ${project.demoUrl ? `<a href="${project.demoUrl}" class="project-link demo" target="_blank">View Demo</a>` : ''}
                    ${project.codeUrl ? `<a href="${project.codeUrl}" class="project-link" target="_blank">View Code</a>` : ''}
                </div>
                <div class="tech-tags">
                    ${techTags}
                </div>
            </div>`;
    }
}

// Enhanced project discovery for GitHub-hosted projects
class GitHubProjectDiscovery {
    constructor(baseUrl = '') {
        this.baseUrl = baseUrl;
    }

    // This method can be enhanced to automatically discover projects
    // by scanning the projects directory structure
    async scanProjectsDirectory() {
        // For a static site, we'll maintain a projects.json file
        try {
            const response = await fetch('./projects/projects.json');
            if (response.ok) {
                return await response.json();
            }
        } catch (error) {
            console.log('Projects.json not found, using default projects');
        }
        
        // Fallback to hardcoded projects
        return [];
    }
}

// Initialize the showcase when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new ProjectShowcase();
});

// Utility functions for project management
const ProjectUtils = {
    // Function to help validate project structure
    validateProject(project) {
        const required = ['name', 'description', 'folder'];
        return required.every(field => project[field]);
    },

    // Function to generate project card HTML
    generateProjectHTML(project) {
        if (!this.validateProject(project)) {
            console.warn('Invalid project structure:', project);
            return '';
        }

        return `
            <div class="project-card" data-project="${project.folder}">
                <h3>${project.name}</h3>
                <p>${project.description}</p>
                <div class="project-links">
                    ${project.demoUrl ? `<a href="${project.demoUrl}" class="project-link demo">Demo</a>` : ''}
                    ${project.codeUrl ? `<a href="${project.codeUrl}" class="project-link">Code</a>` : ''}
                </div>
                <div class="tech-tags">
                    ${(project.technologies || []).map(tech => 
                        `<span class="tech-tag">${tech}</span>`
                    ).join('')}
                </div>
            </div>`;
    }
};