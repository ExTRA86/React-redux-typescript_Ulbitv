import * as UserActionCreators from "./user"
import * as TodoActionCreators from "./todo"
import * as PostActionCreators from "./post"
import * as PhotoActionCreators from "./photo"

export default {
  ...TodoActionCreators,
  ...UserActionCreators,
  ...PostActionCreators,
  ...PhotoActionCreators,
}
