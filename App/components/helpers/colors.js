// colorSeq = {1: 'blue', 2: 'red', 3: 'green', 4: 'purple', 5: 'pink'};

const customIcons = {};

export const MainColour = boolean => {
  //   customIcons[id] = customIcon;

  switch (boolean) {
    case true:
      return {primaryColour: '#BF4F74', secondaryColour: 'white'}; //red
    case false:
      return {primaryColour: '#BF4F74', secondaryColour: 'white'}; //blue

    default:
      return {primaryColour: '#BF4F74', secondaryColour: 'white'}; //blue
  }
};
