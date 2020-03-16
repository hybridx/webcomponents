describe('copyright-x component', () => {
    beforeAll(() => {
      require('../dist/copyright-x');
      document.body.appendChild(document.createElement('copyright-x'));
      return customElements.whenDefined('copyright-x')
        .then(() => {
          this.copyrightX = document.querySelector('copyright-x');
        });
    });
  
    it('creates', () => {
      expect(this.copyrightX).toBeDefined();
    });
  });