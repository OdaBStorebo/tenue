export type laundryStatus = 'clean' | 'worn' | 'laundry';

export type Garment = {
    id: string;
    name: string;
    brand?: string;
    size?: string;
    category: string;
    color: string;
    imageUrl: string;
    laundryStatus: laundryStatus;
};

export type userSettings = {
    launderyTrackingEnabled: boolean;
};