class Member {
  constructor(name) {
    this.name = name;
  }

  setChatRoom(chatRoom) {
    this.chatRoom = chatRoom;
  }

  send(message, toMember) {
    this.chatRoom.send(message, this, toMember);
  }

  receive(message, fromMember) {
    console.log(`${fromMember.name} to ${this.name}: ${message}`);
  }
}

class ChatRoom {
  members = [];
  constructor(name) {
    this.name = name;
  }

  addMember(member) {
    this.members.push(member);
    member.setChatRoom(this);
  }

  removeMember(member) {
    this.members = this.members.filter((m) => m !== member);
  }

  // 发送消息
  send(message, fromMember, toMember) {
    toMember.receive(message, fromMember);
  }
}

const chatRoom = new ChatRoom("聊天室");

const member1 = new Member("小明");
const member2 = new Member("小红");
const member3 = new Member("小黑");
chatRoom.addMember(member1);
chatRoom.addMember(member2);
chatRoom.addMember(member3);

member1.send("相思黄叶落", member2);
member2.send("白露湿青苔", member1);
