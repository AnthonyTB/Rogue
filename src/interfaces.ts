export interface ISocialCard {
    Title: string;
    Link: string;
    IconClassname: string;
    Username: string;
    Count: string | undefined;
    SubLabel: string;
    ButtonLabel: string;
}

export interface IReducer {
    type: string;
    payload: any;
} 