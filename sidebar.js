(() => {
  const items = [
    { file: 'index.html', title: '????' },
    { file: '01-introduction.html', title: '01 ??' },
    { file: '02-what-is-a-coding-assistant.html', title: '02 ????????' },
    { file: '03-claude-code-in-action.html', title: '03 Claude Code ??' },
    { file: '04-claude-code-setup.html', title: '04 Claude Code ?????' },
    { file: '05-project-setup.html', title: '05 ????' },
    { file: '06-adding-context.html', title: '06 ?????' },
    { file: '07-making-changes.html', title: '07 ????' },
    { file: '08-course-satisfaction-survey.html', title: '08 ???????' },
    { file: '09-controlling-context.html', title: '09 ?????' },
    { file: '10-custom-commands.html', title: '10 ?????' },
    { file: '11-mcp-servers-with-claude-code.html', title: '11 Claude Code ? MCP ???' },
    { file: '12-github-integration.html', title: '12 GitHub ??' },
    { file: '13-introducing-hooks.html', title: '13 ?? Hooks' },
    { file: '14-defining-hooks.html', title: '14 ?? Hooks' },
    { file: '15-implementing-a-hook.html', title: '15 ???? Hook' },
    { file: '16-gotchas-around-hooks.html', title: '16 Hooks ????' },
    { file: '17-useful-hooks.html', title: '17 ??? Hooks' },
    { file: '18-another-useful-hook.html', title: '18 ????? Hook' },
    { file: '19-the-claude-code-sdk.html', title: '19 Claude Code SDK' },
    { file: '20-quiz-on-claude-code.html', title: '20 Claude Code ??' },
    { file: '21-summary-and-next-steps.html', title: '21 ??????' }
  ];

  const sidebar = document.getElementById('sidebar');
  if (!sidebar) return;

  const title = document.createElement('div');
  title.className = 'sidebar-title';
  title.textContent = '????';

  const nav = document.createElement('nav');
  nav.className = 'sidebar-nav';

  const current = window.location.pathname.split('/').pop() || 'index.html';
  items.forEach((item) => {
    const link = document.createElement('a');
    link.href = item.file;
    link.textContent = item.title;
    if (item.file === current) {
      link.classList.add('active');
    }
    nav.appendChild(link);
  });

  sidebar.appendChild(title);
  sidebar.appendChild(nav);
})();
