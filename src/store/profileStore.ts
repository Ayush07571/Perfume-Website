import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { CartItem } from './cartStore';

export interface UserProfile {
  fullName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  postalCode: string;
}

export interface PastOrder {
  orderId: string;
  date: string;
  items: CartItem[];
  subtotal: number;
  shipping: number;
  total: number;
  status: 'Confirmed' | 'Processing' | 'Dispatched' | 'Delivered';
  paymentId: string;
}

interface ProfileStore {
  profile: UserProfile;
  orders: PastOrder[];
  scentPreferences: string[];
  updateProfile: (profile: Partial<UserProfile>) => void;
  addOrder: (order: PastOrder) => void;
  toggleScentPreference: (family: string) => void;
}

export const useProfileStore = create<ProfileStore>()(
  persist(
    (set) => ({
      profile: {
        fullName: 'Alistair Sterling',
        email: 'alistair.sterling@sanctum.com',
        phone: '+91 98765 43210',
        address: 'Penthouse 4B, Malabar Hill',
        city: 'Mumbai',
        postalCode: '400006',
      },
      orders: [
        {
          orderId: 'MN-884920',
          date: 'Nov 02, 2026',
          items: [
            {
              id: 'noir-absolu-50ml',
              productId: 'noir-absolu',
              name: 'Noir Absolu',
              volume: '50ml',
              price: 8500,
              quantity: 1,
              image: '/images/products/noir-absolu-main.jpg',
              category: 'Eau de Parfum',
            },
          ],
          subtotal: 8500,
          shipping: 0,
          total: 8500,
          status: 'Delivered',
          paymentId: 'pay_mock_9921248',
        },
      ],
      scentPreferences: ['Oriental', 'Woody', 'Smoky-Oriental'],

      updateProfile: (updated) =>
        set((state) => ({
          profile: { ...state.profile, ...updated },
        })),

      addOrder: (order) =>
        set((state) => ({
          orders: [order, ...state.orders],
        })),

      toggleScentPreference: (family) =>
        set((state) => {
          const exists = state.scentPreferences.includes(family);
          return {
            scentPreferences: exists
              ? state.scentPreferences.filter((f) => f !== family)
              : [...state.scentPreferences, family],
          };
        }),
    }),
    {
      name: 'maison-noir-profile-v3',
      storage: createJSONStorage(() => localStorage),
      onRehydrateStorage: () => (state) => {
        if (state) {
          if (
            !state.profile?.fullName ||
            state.profile.fullName.toLowerCase().includes('ayush') ||
            state.profile.email.toLowerCase().includes('ayush')
          ) {
            state.profile = {
              fullName: 'Alistair Sterling',
              email: 'alistair.sterling@sanctum.com',
              phone: '+91 98765 43210',
              address: 'Penthouse 4B, Malabar Hill',
              city: 'Mumbai',
              postalCode: '400006',
            };
          }
        }
      },
    }
  )
);
