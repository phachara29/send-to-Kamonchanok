const questionText = document.getElementById('head-text-section');
const answerButton1 = document.getElementById('btn-answer-1');
const answerButton2 = document.getElementById('btn-answer-2');

// ตั้งค่าตัวเเปร

questionText.textContent = 'ออมลืมเอฟแล้วหรือยัง';
answerButton1.textContent = 'ยังไม่ลืม';
answerButton2.textContent = 'ลืมแล้ว';

function updateQuestion (text, btn1, btn2) {
    questionText.textContent = text;
    answerButton1.textContent = btn1;
    answerButton2.textContent = btn2;
};

answerButton1.addEventListener('click', () => {
    updateQuestion('จริงอะยังไม่ลืมเราหรอ', 'ใช่', 'ไม่');
    answerButton1.addEventListener('click', () => {
        updateQuestion('เราคิดถึงเองมากๆเลยนะ...เองคิดถึงเราไหม', 'คิดถึงซิ', 'หึไม่อ่ะ');
        answerButton1.addEventListener('click', () => {
            updateQuestion('เรากลับมาเป็นเหมือนเดิมได้ไหม 🥹', 'กลับก็ได้', 'หึเราไม่อยากกลับไปเเล้วอะ');
            answerButton1.addEventListener('click', () => {
                questionText.textContent = 'หืมมม ขอบคุณน้าาาที่ให้โอกาสเราอ่ะ ❤';
                answerButton1.style.display = 'none';
                answerButton2.style.display = 'none';
            })
            answerButton2.addEventListener('click', () => {
                updateQuestion('เเงงไม่อยากกลับมาจริงๆอ่ะ 🥹', 'เราขอโทษนะที่ตอบไปเเบบนั้น', 'อ่ะๆๆกลับก็ด้าย');
                answerButton1.addEventListener('click', () => {
                    questionText.textContent = 'อืมไม่เป็นไร...เราก็ดีได้เเค่นี้เเหละเอง เราขอโทษนะ';
                    answerButton1.style.display = 'none';
                    answerButton2.style.display = 'none';
                })
                answerButton2.addEventListener('click', () => {
                    questionText.textContent = 'จริงนะ อีโมจะร้อง ขอบคุณนะเอง...เราสัญญาเลยเองกลับมาครั้งนี้จะไม่มีทางผิดหวัง';
                })
            })
            
        })
        answerButton2.addEventListener('click', () => {
            updateQuestion('ทำไมไม่คิดถึงกันบ้างเลยเราคิดถึงเองมากเลยนะ', 'ก็ไม่คิดถึงอะจะทำไม', 'เราหยอกเล่น');
            answerButton1.addEventListener('click', () => {
                questionText.textContent = 'งั้นเราขอโทษด้วยที่เรามาถามอะไรเเบบนี้'
                answerButton1.style.display = 'none';
                answerButton2.style.display = 'none';
            })
            answerButton2.addEventListener('click', () => {
                questionText.textContent = 'ขี้หยอกเล่นจังนะเราเนี่ย';
                answerButton1.textContent = '😝';
                answerButton2.style.display = 'none';
                answerButton1.addEventListener('click', () => {
                    updateQuestion('เรากลับมาเป็นเหมือนเดิมได้ไหม 🥹', 'กลับก็ได้', 'หึเราไม่อยากกลับไปเเล้วอะ');
                    answerButton1.addEventListener('click', () => {
                        questionText.textContent = 'หืมมม ขอบคุณน้าาาที่ให้โอกาสเราอ่ะ ❤';
                        answerButton1.style.display = 'none';
                        answerButton2.style.display = 'none';
                    })
                    answerButton2.addEventListener('click', () => {
                        updateQuestion('เเงงไม่อยากกลับมาจริงๆอ่ะ 🥹', 'เราขอโทษนะที่ตอบไปเเบบนั้น', 'อ่ะๆๆกลับก็ด้าย');
                        answerButton1.addEventListener('click', () => {
                            questionText.textContent = 'อืมไม่เป็นไร...เราก็ดีได้เเค่นี้เเหละเอง เราขอโทษนะ';
                            answerButton1.style.display = 'none';
                            answerButton2.style.display = 'none';
                        })
                        answerButton2.addEventListener('click', () => {
                            questionText.textContent = 'จริงนะ อีโมจะร้อง ขอบคุณนะเอง...เราสัญญาเลยเองกลับมาครั้งนี้จะไม่มีทางผิดหวัง';
                        })
                    })
                    
                })
            })
        })
    });
    answerButton2.addEventListener('click', () => {
        updateQuestion('อ่าวเเล้วไหนบอกไม่ลืม', 'หยอกเล่น', 'เราขอโทษ');
        answerButton1.style.display = 'inline-block';
        answerButton2.style.display = 'inline-block';
        answerButton1.addEventListener('click', () => {
            questionText.textContent = 'เอาซะตกใจหมดเลยนะ';
            answerButton1.textContent = '🥹';
            answerButton2.style.display = 'none';
        })
        answerButton2.addEventListener('click', () => {
            updateQuestion('สรุปยังไงกันเเน่เนี่ย', 'ยังไม่ลืม', 'ลืมเเล้ว');
            answerButton1.addEventListener('click', () => {
                updateQuestion('เราคิดถึงเองมากๆเลยนะ...เองคิดถึงเราไหม', 'คิดถึงซิ', 'หึไม่อ่ะ');
                answerButton1.addEventListener('click', () => {
                    updateQuestion('เรากลับมาเป็นเหมือนเดิมได้ไหม 😭', 'กลับก็ได้', 'หึเราไม่อยากกลับไปเเล้วอะ');
                    answerButton1.addEventListener('click', () => {
                        questionText.textContent = 'หืมมม ขอบคุณน้าาาที่ให้โอกาสเราอ่ะ อีโมหัวใจ';
                        answerButton1.style.display = 'none';
                        answerButton2.style.display = 'none';
                    })
                    answerButton2.addEventListener('click', () => {
                        updateQuestion('เเงงไม่อยากกลับมาจริงๆอ่ะ 😭', 'เราขอโทษนะที่ตอบไปเเบบนั้น', 'อ่ะๆๆกลับก็ด้าย');
                        answerButton1.addEventListener('click', () => {
                            questionText.textContent = 'อืมไม่เป็นไร...เราก็ดีได้เเค่นี้เเหละเอง เราขอโทษนะ';
                            answerButton1.style.display = 'none';
                            answerButton2.style.display = 'none';
                        })
                        answerButton2.addEventListener('click', () => {
                            questionText.textContent = 'จริงนะ 🥹 ขอบคุณนะเอง...เราสัญญาเลยเองกลับมาครั้งนี้จะไม่มีทางผิดหวัง';
                        })
                    })
                    
                })
                answerButton2.addEventListener('click', () => {
                    updateQuestion('ทำไมไม่คิดถึงกันบ้างเลยเราคิดถึงเองมากเลยนะ', 'ก็ไม่คิดถึงอะจะทำไม', 'เราหยอกเล่น');
                    answerButton1.addEventListener('click', () => {
                        questionText.textContent = 'งั้นเราขอโทษด้วยที่เรามาถามอะไรเเบบนี้'
                        answerButton1.style.display = 'none';
                        answerButton2.style.display = 'none';
                    })
                    answerButton2.addEventListener('click', () => {
                        questionText.textContent = 'ขี้หยอกเล่นจังนะเราเนี่ย';
                        answerButton1.textContent = 'อีโมจิเเลบลิ้น';
                        answerButton2.style.display = 'none';
                        answerButton1.addEventListener('click', () => {
                            updateQuestion('เรากลับมาเป็นเหมือนเดิมได้ไหม 🥹', 'กลับก็ได้', 'หึเราไม่อยากกลับไปเเล้วอะ');
                            answerButton1.addEventListener('click', () => {
                                questionText.textContent = 'หืมมม ขอบคุณน้าาาที่ให้โอกาสเราอ่ะ ❤';
                                answerButton1.style.display = 'none';
                                answerButton2.style.display = 'none';
                            })
                            answerButton2.addEventListener('click', () => {
                                updateQuestion('เเงงไม่อยากกลับมาจริงๆอ่ะ 🥹', 'เราขอโทษนะที่ตอบไปเเบบนั้น', 'อ่ะๆๆกลับก็ด้าย');
                                answerButton1.addEventListener('click', () => {
                                    questionText.textContent = 'อืมไม่เป็นไร...เราก็ดีได้เเค่นี้เเหละเอง เราขอโทษนะ';
                                    answerButton1.style.display = 'none';
                                    answerButton2.style.display = 'none';
                                })
                                answerButton2.addEventListener('click', () => {
                                    questionText.textContent = 'จริงนะ 🥹 ขอบคุณนะเอง...เราสัญญาเลยเองกลับมาครั้งนี้จะไม่มีทางผิดหวัง';
                                })
                            })
                            
                        })
                    })
                })
            });
            answerButton2.addEventListener('click', () => {
                updateQuestion('งั้นเราขอโทษด้วยนะที่ให้มาเล่นอะไรงี่เง่าเเบบนี้');
            })
        })
    })
});

answerButton2.addEventListener('click', () => {
    questionText.textContent = 'อืมไม่เป็นไร';
    answerButton1.style.display = 'none';
    answerButton2.style.display = 'none';
})