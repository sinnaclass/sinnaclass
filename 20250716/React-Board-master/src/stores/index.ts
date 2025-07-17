import {create} from "zustand";
import { persist} from "zustand/middleware";

interface SignUpState{
    id: string;
    email :string;
}

infterface SignUpstore {
    setId: (id)
}