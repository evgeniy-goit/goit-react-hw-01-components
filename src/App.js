import React from "react";
import Profile from "./tasks/socialProfile/profile";
import Statistics from "./tasks/statistics/statistics";
import FriendList from "./tasks/friendList/friendList";
import Transactions from "./tasks/transactionHistory/transaction";
import user from "./tasks/socialProfile/user.json";
import statisticalData from "./tasks/statistics/statistical-data.json";
import friendsTitle from "./tasks/friendList/friends.json";
import transactionsTitle from "./tasks/transactionHistory/transactions.json";

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
