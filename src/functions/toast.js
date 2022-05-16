import { toast } from "react-toastify";

const notification = (type) => {
    if (type == "noError") {
        toast.success("Data validated!");
    } else if (type == "error") {
        toast.error("Invalid data!");
    };
};

export default notification;