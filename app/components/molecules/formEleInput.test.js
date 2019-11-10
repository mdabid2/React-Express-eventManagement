describe('Our first snapshot test', () => {
  it('Should compare the component with a snapshot', () => {
    const component = '<div>Hello Jest</div>'
    expect(component).toMatchSnapshot();
  })
});
