let classes;
async function getClassesToPurge() {
  if (classes) return classes;
  else {
    classes = await fetch(
      'https://assets.finn.no/pkg/@warp-ds/css/v2/classesToPurge.json',
    ).catch((e) => {
      console.warn(
        "Couldn't fetch any classes to purge, returning empty array",
      );
      return [];
    });
    const result = await classes.json();
    if (result.status !== 200) {
      console.warn(
        "Couldn't fetch any classes to purge, returning empty array",
      );
      return [];
    }
    return result;
  }
}

export const classesToPurge = getClassesToPurge();
