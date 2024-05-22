import css from "../css/app.module.css"
import { Name, Stats } from "./user.jsx";
import { Data } from "./stats.jsx"
import { Friends } from "./friends.jsx";
import { Transaction } from "./transaction.jsx";

export const App = () => (
  <div className={css.div}>
    <Name />
    <Stats />
    <Data />
    <Friends />
    <Transaction/>
  </div>
);




/*export const App = () => {
  return (
    <div
      style={{
        padding: 50,
        height: 'auto',
        display: 'flex',
        flexDirection: 'column',
        gap: 100,
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 24,
        color: '#010101',
        backgroundColor: 'darkgray',
      }}
    >
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};
*/