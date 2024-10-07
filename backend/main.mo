// main.mo
import Debug "mo:base/Debug";
import Time "mo:base/Time";

actor Main {
    public query func greet(name: Text) : Text {
        return "Hello, " # name # "! The time is " # Time.now();
    };

    public func getTimestamp() : Text {
        return "Current timestamp: " # Time.now();
    }
};
