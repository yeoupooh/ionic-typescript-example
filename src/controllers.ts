/// <reference path="../typings/tsd.d.ts" />
/// <reference path="./services.ts" />

class DashCtrl {
  constructor() { }
}

class ChatsCtrl {
  public $inject = ['Chats'];
  chats: any[];

  constructor(
    public Chats: Services.IChatsService
  ) {
    this.chats = Chats.all();
  }

  remove(chat) {
    this.Chats.remove(chat);
  }
}

interface IStateParams extends ng.ui.IStateParamsService {
  chatId: string;
};

class ChatDetailCtrl {
  public $inject = ['Chats', '$stateParams'];
  chat: Object

  constructor(
    public Chats: Services.IChatsService,
    public $stateParams: IStateParams
  ) {
    this.chat = Chats.get($stateParams.chatId);
  }
}

angular.module('starter.controllers', [])

  .controller('DashCtrl', DashCtrl)

  .controller('ChatsCtrl', ChatsCtrl)

  .controller('ChatDetailCtrl', ChatDetailCtrl)

  .controller('AccountCtrl', function() {
    this.settings = {
      enableFriends: true
    };
  });
