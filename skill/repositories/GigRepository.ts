import axios from 'axios';

export interface GigDetails {
  artistName: string;
  eventName: string;
  eventLocation: string;
  eventDate: string;
}

export class GigRepository {
  async fetchNextGigDetailsFor(artist: string): Promise<GigDetails> {
    const response = await axios.get(
      `https://rest.bandsintown.com/artists/${encodeURIComponent(artist)}/events?app_id=1`,
    );

    const nextGig = response.data[0];

    return {
      artistName: nextGig.artist.name,
      eventName: nextGig.venue.name,
      eventLocation: nextGig.venue.location,
      eventDate: nextGig.datetime,
    };
  }
}
