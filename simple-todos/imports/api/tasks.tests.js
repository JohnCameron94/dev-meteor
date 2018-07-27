import { Meteor } from 'meteor/meteor';
import { Random } from 'meteor/random';
import { assert } from 'meteor/practicalmeteor:chai';
import { Tasks }  from './tasks.js';



if(Meteor.isServer){
    describe('Tasks', () => {
        describe('methods', () => {

            const userId = Random.id();
            let taskId;

            beforeEach(()=>{
                Tasks.remove({});
                taskId = Tasks.insert({
                    text: 'test task',
                    createdAt: new Date(),
                    owner: userId,
                    username: 'tmeasday',
                });
            });

            it('can delete owned task',() =>{

                //Find the internal implementation of the task method
                //test it in isolation
                const deleteTask = Meteor.isServer.method_handlers['tasks.remove'];
                //Set up a fake method invocation thats looks like what the method expects
                const invocation = {userId};

                //Run the method with 'this' set up to the fake invocation
                assert.equal(Tasks.find().count(),0);
            });
        });
    });
}