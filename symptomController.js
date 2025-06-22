
export const checkSymptoms = async (req, res) => {
  const { symptoms } = req.body;
  // Dummy logic for demo
  let possibleConditions = [];
  let suggestions = [];
  if (symptoms.includes('cough')) {
    possibleConditions.push('Kennel Cough');
    suggestions.push('See a vet if cough persists.');
  }
  if (symptoms.includes('vomit')) {
    possibleConditions.push('Gastroenteritis');
    suggestions.push('Keep pet hydrated.');
  }
  res.json({ possibleConditions, suggestions });
};