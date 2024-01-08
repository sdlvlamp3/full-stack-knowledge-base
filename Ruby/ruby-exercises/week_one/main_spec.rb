require_relative '../week_one_tests'
describe 'week_one' do
    deecribe '#add' do
        it 'correctly adds two numbers' do
            expect(add(1, 2)).to eq(3)
        end
    end
end


