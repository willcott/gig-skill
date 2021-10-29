import ordinal from "ordinal";

export class DateService {
  format(date: string): string {
    return `${ordinal(new Date(date).getDate())} of ${new Date(date).toLocaleString('default', { month: 'long' })}, ${new Date(date).getFullYear()}`;
  }
}