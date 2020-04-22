import { ColorCustom } from '../../../utils/color'

export const colorPack = {
  primary: '#00A5FF',
  primaryDark: '#215191',
  light: '#FFF',
  textPrimary: '#525966',
  placeholderTextColor: '#A9A9A9',
  danger: '#C62828',
  borderColor: '#e9e9e9',
  backgroundColor: '#b1b1b1',
};

export default {
  footerWrapper: {
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    flexDirection: 'row',
  },
  footerWrapperNC: {
    //  width: 320,
    flexDirection: 'column',
  },
  subSection: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  greyButton: {
    height: 40,
    borderRadius: 5,
    elevation: 0,
  },
  indicator: {
    marginLeft: 5,
    color: ColorCustom.MAIN_COLOR_BLUE,

  },
  selectedItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 15,
    paddingTop: 3,
    paddingRight: 3,
    paddingBottom: 3,
    margin: 3,
  },
  button: {
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: colorPack.light,
    fontSize: 14,
  },
  selectorView: (fixedHeight) => {
    const style = {
      elevation: 2,
    };
    if (fixedHeight) {
      style.height = 250;
    }
    return style;
  },

  inputGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 16,
  },
  dropdownView: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 40,
  },
};
