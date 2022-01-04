const rating = {
  getRatingLevel(data) {
    switch (data) {
      case "Fresh":
        return 0;

      case "In Training":
        return 1;

      case "Rookie":
        return 2;

      case "Champion":
        return 3;

      case "Ultimate":
        return 4;

      case "Mega":
        return 5;

      default: return 0;

    }
  },
}

export default rating;