export function getStrapiURL(path = "") {
    return `${
      process.env.NEXT_PUBLIC_BACKEND_URL || 'https://strapi-943o.onrender.com'
    }${path}`;
  }

  export function getStrapiMedia(media) {
    const imageUrl = media.url.startsWith("/")
      ? getStrapiURL(media.url)
      : media.url;
    return imageUrl;
  }