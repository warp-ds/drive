let classes;
async function getClassesToPurge() {
  if (classes) return classes;
  else {
    classes = await fetch(
      "https://warp-ds.github.io/css/component-classes/classesToPurge.json"
    ).catch((e) => {
      console.warn(
        "Couldn't fetch any classes to purge, returning empty array"
      );
      return [];
    });
    return classes.json();
  }
}

export const classesToPurge = {
  classes: getClassesToPurge(),
};
