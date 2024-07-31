// Define MajorCredits and MinorCredits interfaces with branding
interface MajorCredits {
    credits: number;
    __brand: 'Major';
}

interface MinorCredits {
    credits: number;
    __brand: 'Minor';
}

// Function to sum MajorCredits
function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
    return {
        credits: subject1.credits + subject2.credits,
        __brand: 'Major'
    };
}

// Function to sum MinorCredits
function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
    return {
        credits: subject1.credits + subject2.credits,
        __brand: 'Minor'
    };
}

// Example usage
const majorSubject1: MajorCredits = { credits: 10, __brand: 'Major' };
const majorSubject2: MajorCredits = { credits: 20, __brand: 'Major' };

const minorSubject1: MinorCredits = { credits: 5, __brand: 'Minor' };
const minorSubject2: MinorCredits = { credits: 15, __brand: 'Minor' };

const totalMajorCredits = sumMajorCredits(majorSubject1, majorSubject2);
const totalMinorCredits = sumMinorCredits(minorSubject1, minorSubject2);

console.log('Total Major Credits:', totalMajorCredits.credits);  // 30
console.log('Total Minor Credits:', totalMinorCredits.credits);  // 20
