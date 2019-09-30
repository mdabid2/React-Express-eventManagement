import {connect} from 'react-redux';
import Login from '../components/pages/login';

const mapStateToProps = State =>(console.log(State),{
  email:State.login,
  password:State.login.password,
  userError:State.login.userError
})
const LoginTools = connect(mapStateToProps)(Login);

export default LoginTools;
