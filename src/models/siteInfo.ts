export interface ISiteInfoData {
  info: {
    title: string;
    menu: IMenu[];
  }
  schedule: {
    title: string;
    address: string;
    timeWeek: string;
  },
  contacts: {
    title: string;
    phones: IPhones[];
  },
  social: {
    title: string;
    item: ISocialItem[];
  }
}

interface IMenu {
  id: number;
  name: string;
  link: string;
}

interface IPhones {
  id: number;
  phone: string;
}

interface ISocialItem {
  id: number;
  link: string;
  icon: string;
}
