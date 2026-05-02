export function createAppState(categories) {
  return {
    categories,
    activeCategory: "all",
    totalCommands: categories.reduce((sum, category) => sum + category.commands.length, 0),
  };
}

export function filterCommands(state, rawQuery) {
  const query = rawQuery.trim().toLowerCase();
  const visibleCommands = new Set();

  state.categories.forEach((category) => {
    if (state.activeCategory !== "all" && category.key !== state.activeCategory) {
      return;
    }

    category.commands.forEach((command, index) => {
      const commandText = command.command.toLowerCase();
      const descriptionText = command.searchDescription.toLowerCase();
      const matchesSearch = !query || commandText.includes(query) || descriptionText.includes(query);
      if (matchesSearch) {
        visibleCommands.add(`${category.key}:${index}`);
      }
    });
  });

  return { visibleCommands };
}

export function countVisibleByCategory(visibleCommands) {
  const counts = new Map();
  visibleCommands.forEach((id) => {
    const [category] = id.split(":");
    counts.set(category, (counts.get(category) ?? 0) + 1);
  });
  return counts;
}