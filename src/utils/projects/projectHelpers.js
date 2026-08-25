export const getProjectImages = (project = {}) => {
  if (!Array.isArray(project.images)) {
    return [];
  }

  if (Array.isArray(project.images[0])) {
    return project.images[0];
  }

  return project.images.filter(Boolean);
};

export const getProjectCover = (project = {}) =>
  project.coverImage || getProjectImages(project)[0] || "";

export const getProjectSummary = (project = {}) => {
  if (project.summary) {
    return project.summary;
  }

  if (Array.isArray(project.description)) {
    return project.description[0] || "";
  }

  return project.description || "";
};

export const hasProjectLink = (link) =>
  typeof link === "string" && link.trim().length > 0;

export const getProjectStatus = (state = "") => {
  const normalizedState = state.trim().toLowerCase();

  if (normalizedState === "done") {
    return "Completed";
  }

  if (normalizedState === "in progress") {
    return "In development";
  }

  return state || "Case study";
};

export const getFeaturedProjects = (projects = [], limit = 3) => {
  const projectsWithIndexes = projects.map((project, index) => ({
    ...project,
    projectIndex: index,
  }));

  const explicitlyFeatured = projectsWithIndexes
    .filter((project) => project.featured)
    .sort(
      (first, second) =>
        (first.featuredOrder ?? 999) -
        (second.featuredOrder ?? 999)
    );

  return (
    explicitlyFeatured.length > 0
      ? explicitlyFeatured
      : projectsWithIndexes
  ).slice(0, limit);
};