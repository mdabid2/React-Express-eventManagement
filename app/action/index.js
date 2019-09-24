//Login
const mapDispactherToProps = dispatchEvent => {
  return{
      FilterInventroy: (e) => dispatchEvent(
      {
          type:'FILTER_INVENTORY',
          targetValue:e.target.value
      })
  }
}
