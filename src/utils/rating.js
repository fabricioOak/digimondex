const rating = {
  getRatingLevel(data) {
    switch (data) {
      case "Fresh":
        return (this.rating = 0);

      case "In Training":
        return (this.rating = 1);

      case "Rookie":
        return (this.rating = 2);

      case "Champion":
        return (this.rating = 3);

      case "Ultimate":
        return (this.rating = 4);

      case "Mega":
        return (this.rating = 5);
    }
  },
}

export default rating;