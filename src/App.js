import React from "react";
import Profile from "./tasks/socialProfile/profile";
import Statistics from "./tasks/statistics/statistics";
import FriendList from "./tasks/friendList/friendList";
import Transactions from "./tasks/transactionHistory/transaction";
import user from "./components/user.json";
import statisticalData from "./components/statistical-data.json";
import friendsTitle from "./components/friends.json";
import transactionsTitle from "./components/transactions.json";

function App() {
  return (
    <div>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={statisticalData} />
      <FriendList friends={friendsTitle} />
      <Transactions items={transactionsTitle} />;
    </div>
  );
}

export default App;
