import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { currentUser } from "../LoginForm/actions-loginForm";
import { updateUsers } from "../../../actions/users";
import SignUpForm from "./SignUpForm";

const mapStateToProps = state => ({
  users: state.users
});

const mapDispatchToProps = dispatch => ({
  setUsers: bindActionCreators(updateUsers, dispatch),
  setUser: bindActionCreators(currentUser, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm);
