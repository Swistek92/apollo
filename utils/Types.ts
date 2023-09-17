export type Hisotry_Type = {
  history: {
    details: string | null;
    event_date_utc: Date | null;
    links: {
      article: string | null;
      reddit: string | null;
      wikipedia: string | null;
    };
    title: string | null;
  };
};

export type Histories_Type = {
  histories: [
    {
      details: string;
      id: string;
    }
  ];
};

export type Launches_Tpye = {
  launches: [
    {
      mission_name: string;
      links: {
        flickr_images: string[] | [];
      };
      id: string;
      launch_date_utc: string;
      details: string;
    }
  ];
};

export type Lunch_Type = {
  launch: {
    details: string | null;
    launch_date_utc: string;
    launch_success: Boolean | null;
    links: {
      flickr_images: string[] | [];
    };
    mission_name: string;
    rocket: {
      rocket_name: string;
      rocket_type: string;
      rocket: {
        active: boolean;
        name: string;
        wikipedia: string;
        country: string;
        company: string;
        mass: {
          kg: number;
        };
      };
    };
    static_fire_date_utc: string;
  };
};
