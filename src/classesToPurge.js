let classes;
export async function getClassesToPurge() {
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
    return classes;
  }
}

// export const classesToPurge = () => {
//   getCSS: getClassesToPurge,
// };

export const test = () => [classesToPurge()];
