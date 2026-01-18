/**
 * @param {number} initialEnergy
 * @param {number} initialExperience
 * @param {number[]} energy
 * @param {number[]} experience
 * @return {number}
 */
var minNumberOfHours = function (
  initialEnergy,
  initialExperience,
  energy,
  experience,
) {
  let trainHours = 0
  let currentEnergy = initialEnergy
  let currentExperience = initialExperience

  for (let i = 0; i < energy.length; i++) {
    // 检查精力是否足够击败当前对手
    if (currentEnergy <= energy[i]) {
      const needEnergy = energy[i] - currentEnergy + 1
      trainHours += needEnergy
      currentEnergy += needEnergy
    }

    // 检查经验是否足够击败当前对手
    if (currentExperience <= experience[i]) {
      const needExperience = experience[i] - currentExperience + 1
      trainHours += needExperience
      currentExperience += needExperience
    }

    // 击败对手后，精力减少，经验增加
    currentEnergy -= energy[i]
    currentExperience += experience[i]
  }

  return trainHours
}
