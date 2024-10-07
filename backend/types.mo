// types.mo
type User = {
    id: Nat;
    name: Text;
    email: Text;
};

type Message = {
    sender: User;
    content: Text;
};
