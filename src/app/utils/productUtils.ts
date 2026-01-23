
export const getBadgeColor = (category: string) => {
    switch (category) {
      case 'Festkochend': return 'bg-blue-600 hover:bg-blue-700 text-white';
      case 'Vorwiegend festkochend': return 'bg-emerald-600 hover:bg-emerald-700 text-white';
      case 'Mehlig': return 'bg-red-500 hover:bg-red-600 text-white';
      default: return 'bg-dusty-olive text-white';
    }
  };
