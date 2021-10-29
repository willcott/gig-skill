import axios from 'axios';

export interface GigDetails {
  artistName: string;
  eventName: string;
  eventLocation: string;
  eventDate: string;
}

export class GigRepository {
  async fetchLatestGigDetailsFor(artist: string): Promise<GigDetails> {
    const response = await axios.get(
      `https://rest.bandsintown.com/artists/${encodeURIComponent(artist)}/events?app_id=1`,
    );

    const latestGig = response.data[0];

    return {
      artistName: latestGig.artist.name,
      eventName: latestGig.venue.name,
      eventLocation: latestGig.venue.location,
      eventDate: latestGig.datetime,
    };
  }
}
