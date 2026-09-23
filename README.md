:root[data-theme="light"] {
    --color-background: #f3f5f7;
    --color-surface: #ffffff;
    --color-surface-elevated: #ffffff;

    --color-text-primary: #17191d;
    --color-text-secondary: #4b535f;
    --color-text-muted: #737b87;

    --color-border: rgba(23, 25, 29, 0.11);

    --color-accent: #b77900;
    --color-accent-hover: #925f00;

    --color-navbar-background: rgba(243, 245, 247, 0.9);

    --color-shadow-sm: 0 2px 8px rgba(23, 25, 29, 0.05);
    --color-shadow-md: 0 8px 24px rgba(23, 25, 29, 0.08);
    --color-shadow-lg: 0 16px 40px rgba(23, 25, 29, 0.1);
}



navbar.css

All navbar-specific light-theme styling:

:root[data-theme="light"] .navbar {
    box-shadow: 0 1px 12px rgba(23, 25, 29, 0.06);
}

:root[data-theme="light"] .navbar__brand-mark {
    background: var(--color-surface);
    box-shadow: var(--color-shadow-sm);
}

projects.css

All project-card-specific light-theme styling:

:root[data-theme="light"] .project-card {
    border-color: var(--color-border);
    box-shadow: var(--color-shadow-sm);
}

:root[data-theme="light"] .project-card:hover {
    border-color: rgba(183, 121, 0, 0.35);
    box-shadow: var(--color-shadow-md);
}

projectCaseStudy.css

All case-study-specific light-theme styling:

:root[data-theme="light"] .case-study__challenge {
    background: var(--color-surface);
    border-color: var(--color-border);
    box-shadow: var(--color-shadow-sm);
}

global.css

Only genuinely global things, such as:

body {
    background: var(--color-background);
    color: var(--color-text-primary);
    transition:
        background-color var(--transition-normal),
        color var(--transition-normal);
}