import { ICollectionType, IConfig } from "./lib/app/types";

const CONFIG: IConfig = {
    coinDenom: "ustars",
    name: "Embeddable House",
    chainId: "elgafar-1",
    createdDate: "2024-03-31T19:01:01.148Z",
    modifiedDate: "2024-03-31T19:01:01.148Z",
    id: "andromeda",
    collections: [
        {
            auction:
                "andr17zzcu2mkgqtcrn8753ulqgyfrgng3jwhleh6d75dt2gxgxqcclkq3ua39j",
            cw721: "andr14trygfz87rdpmx8tpmrnqk9zwdv2ls7jadlv8qyvz59y0mrv232sm7hlh0",
            name: "LostSignal",
            type: ICollectionType.AUCTION,
            id: "embeddables-auction-1",
            featured: "ANDR1"
        },
       
    ],
};

export default CONFIG;
