// colorSeq = {1: 'blue', 2: 'red', 3: 'green', 4: 'purple', 5: 'pink'};

const customIcons = {};

export const MainAnimation = title => {
  //   customIcons[id] = customIcon;

  switch (title) {
    case 'FirstScreen':
      return require('../../assets/Lotties/animation_loginScreen.json');
    // case false:
    //   return {primaryColour: '#BF4F74', secondaryColour: 'white'}; //blue

    default:
      return require('../../assets/Lotties/animation_loginScreen.json');
  }
};
