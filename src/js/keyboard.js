import Create from './utils/create';
import Wrapper from './view/wrapper';
import language from './language/exp';

const rowsOrder = [
  [
    'Backquote',
    'Digit1',
    'Digit2',
    'Digit3',
    'Digit4',
    'Digit5',
    'Digit6',
    'Digit7',
    'Digit8',
    'Digit9',
    'Digit0',
    'Minus',
    'Equal',
    'Backspace',
  ],
  [
    'Tab',
    'KeyQ',
    'KeyW',
    'KeyE',
    'KeyR',
    'KeyT',
    'KeyY',
    'KeyU',
    'KeyI',
    'KeyO',
    'KeyP',
    'BracketLeft',
    'BracketRight',
    'Backslash',
  ],
  [
    'CapsLock',
    'KeyA',
    'KeyS',
    'KeyD',
    'KeyF',
    'KeyG',
    'KeyH',
    'KeyJ',
    'KeyK',
    'KeyL',
    'Semicolon',
    'Quote',
    'Enter',
  ],
  [
    'ShiftLeft',
    'KeyZ',
    'KeyX',
    'KeyC',
    'KeyV',
    'KeyB',
    'KeyN',
    'KeyM',
    'Comma',
    'Period',
    'Slash',
    'ShiftRight',
  ],
  [
    'ControlLeft',
    'AltLeft',
    'Space',
    'AltRight',
    'ControlRight',
    'ArrowLeft',
    'ArrowDown',
    'ArrowRight',
    'ArrowUp',
  ],
];

export default class Keyboard extends Wrapper {
  constructor() {
    super();
  }
  keyboardLayout() {
    this.keyboard = new Create(
      this.container.element,
      'div',
      'keyboard',
      '',
      ''
    );
  }

  engKeyboardLayout() {
    const { eng } = language;
    const keys = Object.entries(eng);
    const keysOrder = rowsOrder.map((row) =>
      row.map((key) => keys.find((keyItem) => keyItem[1].code === key))
    );

    // console.log(keys);
    // console.log(keysOrder);

    keysOrder.forEach((row) => {
      const keyboardRow = new Create(
        this.keyboard.element,
        'div',
        'keyboard-row',
        '',
        ''
      );
      row.forEach((key) => {
        const keyboardKey = new Create(
          keyboardRow.element,
          'div',
          'keyboard-key',
          key[1].small,
          {
            'data-key': key[1].code,
          }
        );
        if (key[1].code === 'Space') {
          keyboardKey.element.classList.remove('keyboard-key');
          keyboardKey.element.classList.add('space');
          keyboardKey.element.innerHTML = '&nbsp;';
          keyboardKey.element.addEventListener('click', (e) => {
            e.preventDefault();
            this.output.element.value += ' ';
            this.output.element.focus();
          });
        } else if (key[1].code === 'Enter') {
          keyboardKey.element.classList.remove('keyboard-key');
          keyboardKey.element.classList.add('enter');
          keyboardKey.element.addEventListener('click', (e) => {
            e.preventDefault();
            this.output.element.value += '\n';
            this.output.element.focus();
          });
        } else if (key[1].code === 'Backspace') {
          keyboardKey.element.classList.remove('keyboard-key');
          keyboardKey.element.classList.add('backspace');
          keyboardKey.element.addEventListener('click', (e) => {
            e.preventDefault();
            this.output.element.value = this.output.element.value.slice(
              0,
              this.output.element.value.length - 1
            );
            this.output.element.focus();
          });
        } else if (key[1].code === 'CapsLock') {
          keyboardKey.element.classList.remove('keyboard-key');
          keyboardKey.element.classList.add('capslock');
          keyboardKey.element.addEventListener('click', (e) => {
            e.preventDefault();
            this.output.element.value = this.output.element.value.toUpperCase();
            this.output.element.focus();
          });
        } else if (key[1].code === 'ShiftLeft') {
          keyboardKey.element.classList.remove('keyboard-key');
          keyboardKey.element.classList.add('shiftLeft');
        } else if (key[1].code === 'ShiftRight') {
          keyboardKey.element.classList.remove('keyboard-key');
          keyboardKey.element.classList.add('shiftRight');
        } else if (key[1].code === 'ControlLeft') {
          keyboardKey.element.classList.remove('keyboard-key');
          keyboardKey.element.classList.add('ctrlLeft');
        } else if (key[1].code === 'ControlRight') {
          keyboardKey.element.classList.remove('keyboard-key');
          keyboardKey.element.classList.add('ctrlRight');
        } else if (key[1].code === 'AltLeft') {
          keyboardKey.element.classList.remove('keyboard-key');
          keyboardKey.element.classList.add('altLeft');
        } else if (key[1].code === 'AltRight') {
          keyboardKey.element.classList.remove('keyboard-key');
          keyboardKey.element.classList.add('altRight');
        } else if (key[1].code === 'ArrowLeft') {
          keyboardKey.element.classList.remove('keyboard-key');
          keyboardKey.element.classList.add('left');
        } else if (key[1].code === 'ArrowRight') {
          keyboardKey.element.classList.remove('keyboard-key');
          keyboardKey.element.classList.add('right');
        } else if (key[1].code === 'ArrowUp') {
          keyboardKey.element.classList.remove('keyboard-key');
          keyboardKey.element.classList.add('up');
        } else if (key[1].code === 'ArrowDown') {
          keyboardKey.element.classList.remove('keyboard-key');
          keyboardKey.element.classList.add('down');
        } else if (key[1].code === 'Tab') {
          keyboardKey.element.classList.remove('keyboard-key');
          keyboardKey.element.classList.add('tab');
          keyboardKey.element.addEventListener('click', (e) => {
            e.preventDefault();
            this.output.element.value += '\t';
            this.output.element.focus();
          });
        }
      });
    });
  }

  evtHandler() {}
  // keys.forEach(([key, value]) => {
  //   if (value.length > 1) {
  //     value.forEach((item) => {
  //     }
  //     );
  //   } else {
  //     this.keyboard.element.innerHTML += `<div class="key">${value.small}</div>`;
  //   }
  // });}

  // keys.forEach(([key, value]) => {
  //   // console.log(key);
  //   console.log(value);
  //   const keyboardRow = new Create(
  //     this.keyboard.element,
  //     'div',

  //     'keyboard-row',
  //     '',
  //     ''
  //   );
  //   const keyboardKey = new Create(
  //     keyboardRow.element,
  //     'div',
  //     'keyboard-key',
  //     '',
  //     ''
  //   );
  //   keyboardKey.element.innerHTML = value.small;

  // });

  // console.log(keys);

  // for (let i = 0; i < rowsOrder.length; i++) {
  //   const keyboardRow = new Create(
  //     this.keyboard.element,
  //     'div',
  //     'keyboard-row',
  //     '',
  //     ''
  //   );
  //   for (let j = 0; j < rowsOrder[i].length; j++) {
  //     const keyboardKey = new Create(
  //       keyboardRow.element,
  //       'div',
  //       'keyboard-key',
  //       '',
  //       {
  //         'data-key': rowsOrder[i][j],

  //       }
  //     );
  //     keyboardKey.element.innerHTML = eng;

  // eng.forEach((key) => {
  //   const keyboardRows = new Create(
  //     this.keyboard.element,
  //     'div',
  //     'keyboard-rows',
  //     '',
  //     ''
  //   );
  //   // this.keyboardKey.push(
  //   //   new Create(this.keyboard.element, 'div', 'keyboard-key', key.small, '')
  //   // );
  // });

  render() {
    this.keyboardLayout();
    this.engKeyboardLayout();
    this.evtHandler();
  }
}
