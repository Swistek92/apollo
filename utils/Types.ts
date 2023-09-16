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
