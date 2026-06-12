export interface Page {
  id: number;
  date: string;
  slug: string;
  status: string;
  link: string;

  title: {
    rendered: string;
  };

  content: {
    rendered: string;
    protected: boolean;
  };

  excerpt: {
    rendered: string;
    protected: boolean;
  };

  featured_media: number;
}